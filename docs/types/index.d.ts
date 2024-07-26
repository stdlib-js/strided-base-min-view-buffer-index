/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Returns the minimum accessible index based on a set of provided strided array parameters.
*
* @param N - number of indexed elements
* @param stride - stride length
* @param offset - starting index
* @returns minimum accessible index
*
* @example
* var idx = minViewBufferIndex( 3, -2, 10 );
* // returns 6
*/
declare function minViewBufferIndex( N: number, stride: number, offset: number ): number;


// EXPORTS //

export = minViewBufferIndex;
